import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const data = await req.formData();
    const content = {
        username: "企鵝窩報名紀錄",
        avatar_url: "https://cdn.lazco.dev/penguin.png",
        embeds: [
            {
                "title": data.get("name"),
                "color": parseInt("0x34e718"),
                "thumbnail": {
                    "url": data.get("logo"),
                },
                "fields": [
                    {
                        "name": "報團人兼隊長 DC ID",
                        "value": data.get("leader"),
                        "inline": false
                    },
                    {
                        "name": "隊員一 DC ID",
                        "value": data.get("member1"),
                        "inline": true
                    },
                    {
                        "name": "隊員二 DC ID",
                        "value": data.get("member2"),
                        "inline": true
                    },
                    {
                        "name": "\u200b",
                        "value": "\u200b",
                        "inline": true
                    },
                    {
                        "name": "隊員三 DC ID",
                        "value": data.get("member3"),
                        "inline": true
                    },
                    {
                        "name": "隊員四 DC ID",
                        "value": data.get("member4"),
                        "inline": true
                    },
                    {
                        "name": "\u200b",
                        "value": "\u200b",
                        "inline": true
                    },
                    {
                        "name": "候補隊員一 DC ID",
                        "value": data.get("alternate1"),
                        "inline": true
                    },
                    {
                        "name": "候補隊員二 DC ID",
                        "value": data.get("alternate2"),
                        "inline": true
                    },
                    {
                        "name": "\u200b",
                        "value": "\u200b",
                        "inline": true
                    },
                    {
                        "name": "報團人兼隊長 RiogGame ID",
                        "value": data.get("leader_r"),
                        "inline": false
                    },
                    {
                        "name": "隊員一 RiogGame ID",
                        "value": data.get("member1_r"),
                        "inline": true
                    },
                    {
                        "name": "隊員二 RiogGame ID",
                        "value": data.get("member2_r"),
                        "inline": true
                    },
                    {
                        "name": "\u200b",
                        "value": "\u200b",
                        "inline": true
                    },
                    {
                        "name": "隊員三 RiogGame ID",
                        "value": data.get("member3_r"),
                        "inline": true
                    },
                    {
                        "name": "隊員四 RiogGame ID",
                        "value": data.get("member4_r"),
                        "inline": true
                    },
                    {
                        "name": "\u200b",
                        "value": "\u200b",
                        "inline": true
                    },
                    {
                        "name": "候補隊員一 RiogGame ID",
                        "value": data.get("alternate1_r"),
                        "inline": true
                    },
                    {
                        "name": "候補隊員二 RiogGame ID",
                        "value": data.get("alternate2_r"),
                        "inline": true
                    },
                    {
                        "name": "\u200b",
                        "value": "\u200b",
                        "inline": true
                    },
                ],
                "timestamp": new Date().toISOString(),
                "footer": {
                    "text": "This system was made by Lazco",
                    "icon_url": "https://cdn.lazco.dev/n5.png",
                },
            },
        ],
    };

    axios(process.env.NEXT_PUBLIC_DISCORD_WEBHOOK!, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        data: JSON.stringify(content),
    });

    return NextResponse.json({ "message": "Request Sent!" });
}