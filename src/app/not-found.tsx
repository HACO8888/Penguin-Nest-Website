export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100dvh-4rem)]">
      <h1 className="text-[3.5rem] font-bold text-white">404 - 未知的頁面</h1>
      <p className="text-[1.3rem] text-gray-300 mt-1">您查看的頁面可能已經改變位置或是被刪除了</p>
    </div>
  );
}