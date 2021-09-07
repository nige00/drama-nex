import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import { originalWorkList } from "../../lib/originalWorkList";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // sitemapに"----"の分が表示されないようにする
  const datalist = originalWorkList.filter((item) => {
    if (item.pageUrl != "----") {
      return item;
    }
  });

  const fields: ISitemapField[] = datalist.map((data) => ({
    loc: `https://drama-nex.vercel.app/originalwork/${decodeURI(data.pageUrl)
      .substr(0, 10)
      .replace(
        /○|〇|●|×|★|＆|◆|【|】|♀|「|」|！|（|）|・|〜|『|』|-| |。|ー|’|、|…|％|～|？|☆|‘|ュ|I.B.|&|<|>/g,
        ""
      )}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(ctx, fields);
};
export default function Site() {}
