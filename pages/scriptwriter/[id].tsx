import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import ReviewStar from "../../components/ReviewStar";
import { Datas } from "../../lib/Datas";
import { scriptWriterList } from "../../lib/scriptWriterList";
import { fixedSentence } from "../../lib/fixedSentence";

type Props = {
  Data: any;
};

const Post: NextPage<Props> = ({ Data }) => {
  if (!Data) {
    return <div>Loading...</div>;
  }

  // URLに合わせて女優の出演作品を抽出
  let scriptWriterList = Datas.filter((item) => {
    if (item.scriptWriter == Data.scriptWriterName) {
      return item;
    } else if (item.scriptWriter.length > 1) {
      for (let i = 0; i < item.scriptWriter.length; i++) {
        if (item.scriptWriter[i] == Data.scriptWriterName) {
          return item;
        }
      }
    }
  });

  const datalist = [];
  if (scriptWriterList.length <= 60) {
    for (let i = 0; i < scriptWriterList.length; i++) {
      datalist.push(scriptWriterList[i]);
    }
  } else {
    for (let i = 0; i < 60; i++) {
      datalist.push(scriptWriterList[i]);
    }
  }

  // 評価順に並び替え
  scriptWriterList.sort(function (a, b) {
    if (a.aveReviewPoint < b.aveReviewPoint) return 1;
    if (a.aveReviewPoint > b.aveReviewPoint) return -1;
    return 0;
  });

  return (
    <Layout
      title={`${fixedSentence.date}U-NEXTで見れる『${Data.scriptWriterName}』が脚本の作品一覧`}
      description={`U-NEXTで見れる${Data.scriptWriterName}が脚本の作品一覧`}
      keyword={fixedSentence.keywords}
      url={`${fixedSentence.url}/scriptWriter/${decodeURI(
        Data.scriptWriterName
      )}`}
      type="article"
    >
      <h1 className="text-xl sm:text-2xl text-gray-600">{`${fixedSentence.date}U-NEXTで見れる『${Data.scriptWriterName}』が脚本の作品一覧【${scriptWriterList.length}件】`}</h1>
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
      <div className="flex items-center w-11/12">
        <div className="flex space-x-4">
          <Link href="/">
            <a className="underline">ホーム</a>
          </Link>
        </div>
        <div className="px-1">{`>`}</div>
        <div className="flex space-x-4">
          <Link href="/scriptwriter">
            <a className="underline">脚本一覧</a>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-6 w-11/12">
        {datalist.map((content, index) => {
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
              <h3 className="py-1 truncate">{content.title}</h3>
              <ReviewStar star={content.aveReviewPoint} />
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

export default Post;

export async function getServerSidePaths() {
  const paths = scriptWriterList.map((scriptWriter) => {
    return {
      params: {
        id: String(scriptWriter.pageUrl),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export interface ParamsObj {
  id: string;
}

export async function getServerSideProps({ params }: { params: ParamsObj }) {
  const Data = scriptWriterList.find(function (scriptWriter) {
    return scriptWriter.pageUrl === params.id;
  });

  return {
    props: {
      Data,
      Datas,
    },
  };
}
