import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import ReviewStar from "../components/ReviewStar";
import { Datas } from "../lib/Datas";
import { fixedSentence } from "../lib/fixedSentence";

const Home: NextPage = () => {
  const ranking = Datas.slice(0, 100);

  return (
    <Layout
      title={`U-NEXT国内ドラマまとめ`}
      description={`${fixedSentence.date}U-NEXTで見れる人気の国内ドラマを毎月チェック！人気作品を一括で確認するのにおすすめです。`}
      keyword={fixedSentence.keywords}
      url={`${fixedSentence.url}/`}
      type="website"
    >
      <h1 className="text-xl sm:text-2xl text-gray-600">
        {`U-NEXT国内ドラマまとめ`}
      </h1>
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
      <div className="py-4 sm:px-4">
        <p>{fixedSentence.caution}</p>
      </div>
      <h2 className="text-2xl">U-NEXTで見れる国内ドラマTOP100</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-6 w-11/12">
        {ranking.map((content, index) => {
          return (
            <div key={content.forUrlNumber}>
              <div className="pt-4">
                <Link href={`/posts/${content.forUrlNumber}`} passHref>
                  <a>
                    <div className="relative">
                      <Image
                        src={`/package_images/${content.imgName}`}
                        alt={content.title}
                        width={828}
                        height={466}
                        objectFit="contain"
                      />
                      <p className="absolute top-2 left-2 bg-gray-800 text-white rounded px-3 py-1">{`No.${
                        index + 1
                      }`}</p>
                    </div>
                  </a>
                </Link>
              </div>
              <Link href={`/posts/${content.forUrlNumber}`} passHref>
                <a>
                  <h3 className="py-1 truncate">{content.title}</h3>
                </a>
              </Link>
              <ReviewStar star={Number(content.aveReviewPoint)} />
              {content.paid == "----" ? (
                <p className="my-2">
                  <span className="py-1 px-2 text-white bg-green-600 rounded">
                    {content.ondemand}
                  </span>
                </p>
              ) : (
                <p className="my-2 ">
                  <span className="py-1 px-2 text-white bg-gray-400 rounded">
                    {content.ondemand}
                  </span>
                  <span className="pl-2">{content.paid}</span>
                </p>
              )}
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

export default Home;
