import "tailwindcss/tailwind.css";
import { Datas } from "./Datas";

export const fixedSentence = {
  caution: `本ページの情報は${Datas[0].date}時点のものです。最新の配信状況はU-NEXT公式サイトにてご確認ください。`,
  date: `【${Datas[0].date}】`,
  affiliateLink:
    "https://link-a.net/gate.php?guid=on&mcode=rdqxkpdl&acode=iw9piispuxdm&itemid=0",
  pagelink: (url: string) => {
    {
      return `https://link-a.net/gate.php?guid=on&mcode=rdqxkpdl&acode=iw9piispuxdm&itemid=0&mallurl1=https%3A%2F%2Fwww.video.unext.jp%2Ftitle%2F${url}`;
    }
  },
  microCopy: "＼31日間無料 + 1200円分のポイントGET！／",
  unext: "U-NEXT",
  keywords: "見放題,国内ドラマ,U-NEXT,お得,30日間無料,VOD",
  url: "https://drama-nex.vercel.app",
};
