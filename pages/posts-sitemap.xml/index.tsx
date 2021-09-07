import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import { Datas } from "../../lib/Datas";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // sitemapに"----"の分が表示されないようにする
  const datalist = Datas.filter((item) => {
    if (item.forUrlNumber != "----") {
      return item;
    }
  });

  const fields: ISitemapField[] = datalist.map((data) => ({
    loc: `https://drama-nex.vercel.app/posts/${decodeURI(data.forUrlNumber)
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
