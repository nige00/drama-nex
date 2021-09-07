import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";
import { scriptWriterList } from "../lib/scriptWriterList";
import { fixedSentence } from "../lib/fixedSentence";

const scriptWriter: NextPage = () => {
  return (
    <Layout
      title={`${fixedSentence.date}U-NEXTで見れる国内ドラマの脚本家一覧`}
      description={`U-NEXTで見れる国内ドラマの脚本家一覧`}
      keyword={fixedSentence.keywords}
      url={`${fixedSentence.url}/scriptWriter`}
      type="article"
    >
      <h1 className="text-xl sm:text-2xl text-gray-600">{`${fixedSentence.date}U-NEXTで見れる国内ドラマの脚本家一覧【${scriptWriterList.length}人】`}</h1>
      <div className="py-4 sm:px-4">
        <p>{fixedSentence.caution}</p>
      </div>
      <div className="flex flex-col justify-center items-center py-4 cursor-pointer">
        <span className="py-1 text-sm">{fixedSentence.microCopy}</span>
        <a
          className="py-3 px-8 text-xl text-white bg-blue-400 hover:opacity-90 rounded transition"
          href={fixedSentence.affiliateLink}
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          U-NEXTでもっと見る
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 w-11/12">
        {scriptWriterList.map((content) => {
          return (
            <div key={content.scriptWriterName}>
              <Link href={`/scriptwriter/${content.pageUrl}`}>
                <a className="text-blue-500 hover:opacity-90 border-b border-blue-500">
                  {content.scriptWriterName}
                </a>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col justify-center items-center py-4 cursor-pointer">
        <span className="py-1 text-sm">{fixedSentence.microCopy}</span>
        <a
          className="py-3 px-8 text-xl text-white bg-blue-400 hover:opacity-90 rounded transition"
          href={fixedSentence.affiliateLink}
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          U-NEXTでもっと見る
        </a>
      </div>
    </Layout>
  );
};

export default scriptWriter;
