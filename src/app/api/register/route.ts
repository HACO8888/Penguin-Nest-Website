

// Modules
import { NextResponse } from "next/server";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import axios from "axios";

// Libs
import { r2 } from "@/libs/r2";
import mongo from "@/libs/mongo";

// Models
import RegisterModel from "@/models/Register";

export async function POST(request: Request) {
  const time = formatDateTime();
  const data: FormData = await request.formData();
  const logo = data.get("logo") as File;

  if (logo.size === 0) {
    return NextResponse.json({ code: 1001, title: "報名失敗", message: "您沒有選擇要上傳的戰隊 Logo，請選擇後再重新報名。" });
  }

  const logoBuffer = Buffer.from(await logo.arrayBuffer());

  const params = {
    Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME,
    Key: logo.name.split(".")[0] + "-" + time + "." + logo.name.split(".")[1],
    Body: logoBuffer,
    ContentType: logo.type,
  };

  await r2.send(new PutObjectCommand(params));


  try {
    await fetch(`https://cdn.lazco.dev/${logo.name.split(".")[0]}-${time}.${logo.name.split(".")[1]}`);
  } catch (e) {
    return NextResponse.json({ code: 1002, title: "報名失敗", message: "上船戰隊 Logo 時發生錯誤，請稍後再重試。" });
  }

  mongo();

  const name = data.get("name");
  const leader = data.get("leader");
  const member1 = data.get("member1");
  const member2 = data.get("member2");
  const member3 = data.get("member3");
  const member4 = data.get("member4");
  const alternate1 = data.get("alternate1");
  const alternate2 = data.get("alternate2");
  const leader_r = data.get("leader");
  const member1_r = data.get("member1");
  const member2_r = data.get("member2");
  const member3_r = data.get("member3");
  const member4_r = data.get("member4");
  const alternate1_r = data.get("alternate1");
  const alternate2_r = data.get("alternate2");

  if (!name || name === "") {
    return NextResponse.json({ code: 1003, title: "報名失敗", message: "您沒有填寫戰隊名稱，請重新填寫再送出報名。" });
  }

  if (!leader || leader === "") {
    return NextResponse.json({ code: 1004, title: "報名失敗", message: "您沒有填寫隊長的 Discord 帳號，請重新填寫再送出報名。" });
  }

  if (!member1 || member1 === "") {
    return NextResponse.json({ code: 1005, title: "報名失敗", message: "您沒有填寫隊員1的 Discord 帳號，請重新填寫再送出報名。" });
  }

  if (!member2 || member2 === "") {
    return NextResponse.json({ code: 1006, title: "報名失敗", message: "您沒有填寫隊員2的 Discord 帳號，請重新填寫再送出報名。" });
  }

  if (!member3 || member3 === "") {
    return NextResponse.json({ code: 1007, title: "報名失敗", message: "您沒有填寫隊員3的 Discord 帳號，請重新填寫再送出報名。" });
  }

  if (!member4 || member4 === "") {
    return NextResponse.json({ code: 1008, title: "報名失敗", message: "您沒有填寫隊員4的 Discord 帳號，請重新填寫再送出報名。" });
  }

  if (!leader_r || leader_r === "") {
    return NextResponse.json({ code: 1009, title: "報名失敗", message: "您沒有填寫隊長的 RiogGame 帳號，請重新填寫再送出報名。" });
  }

  if (!member1_r || member1_r === "") {
    return NextResponse.json({ code: 1010, title: "報名失敗", message: "您沒有填寫隊員1的 RiogGame 帳號，請重新填寫再送出報名。" });
  }

  if (!member2_r || member2_r === "") {
    return NextResponse.json({ code: 1011, title: "報名失敗", message: "您沒有填寫隊員2的 RiogGame 帳號，請重新填寫再送出報名。" });
  }

  if (!member3_r || member3_r === "") {
    return NextResponse.json({ code: 1012, title: "報名失敗", message: "您沒有填寫隊員3的 RiogGame 帳號，請重新填寫再送出報名。" });
  }

  if (!member4_r || member4_r === "") {
    return NextResponse.json({ code: 1013, title: "報名失敗", message: "您沒有填寫隊員4的 RiogGame 帳號，請重新填寫再送出報名。" });
  }

  const register_data = new RegisterModel({
    name: name,
    logo: `https://cdn.lazco.dev/${logo.name.split(".")[0]}-${time}.${logo.name.split(".")[1]}`,
    leader: leader,
    member1: member1,
    member2: member2,
    member3: member3,
    member4: member4,
    alternate1: alternate1,
    alternate2: alternate2,
    leader_r: leader_r,
    member1_r: member1_r,
    member2_r: member2_r,
    member3_r: member3_r,
    member4_r: member4_r,
    alternate1_r: alternate1_r,
    alternate2_r: alternate2_r,
  });

  try {
    await register_data.save();
  } catch (e) {
    console.log(e);
  }

  const webhookData = new FormData();
  webhookData.append("name", name);
  webhookData.append("logo", `https://cdn.lazco.dev/${logo.name.split(".")[0]}-${time}.${logo.name.split(".")[1]}`);
  webhookData.append("leader", leader);
  webhookData.append("member1", member1);
  webhookData.append("member2", member2);
  webhookData.append("member3", member3);
  webhookData.append("member4", member4);
  webhookData.append("alternate1", alternate1 || "Null");
  webhookData.append("alternate2", alternate2 || "Null");
  webhookData.append("leader_r", leader_r);
  webhookData.append("member1_r", member1_r);
  webhookData.append("member2_r", member2_r);
  webhookData.append("member3_r", member3_r);
  webhookData.append("member4_r", member4_r);
  webhookData.append("alternate1_r", alternate1_r || "Null");
  webhookData.append("alternate2_r", alternate2_r || "Null");

  await fetch(`${process.env.NEXT_PUBLIC_URL}/api/discord`, {
    method: "POST",
    body: webhookData,
  });

  return NextResponse.json({ code: 1000, title: "報名成功！", message: `<a href="https://cdn.lazco.dev/${logo.name.split(".")[0]}-${time}.${logo.name.split(".")[1]}" target="_blank" style="color: blue;">點我查看 Logo</a>` });
}

function formatDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day}-${hours}-${minutes}-${seconds}`;
}