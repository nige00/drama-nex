import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import ReviewStar from "../../components/ReviewStar";
import { Datas } from "../../lib/Datas";
import { fixedSentence } from "../../lib/fixedSentence";

type Props = {
  Data: any;
};

const Post: NextPage<Props> = ({ Data }) => {
  if (!Data) {
    return <div>Loading...</div>;
  }

  const appealFlag = Data.aveReviewPoint;

  return (
    <Layout
      title={`${fixedSentence.date}U-NEXTで配信中！「${Data.title}」の視聴方法`}
      description={`U-NEXTで${Data.title}は配信されてる？人気の国内ドラマをお得に見よう！`}
      keyword={fixedSentence.keywords}
      url={`${fixedSentence.url}/posts/${Data.forUrlNumber}`}
      type="article"
    >
      <div className="flex flex-col justify-center items-center w-11/12 sm:w-8/12">
        <h1 className="text-xl sm:text-2xl text-gray-600">{`${fixedSentence.date}${Data.title}`}</h1>
        <div className="py-8">
          <a
            className="hover:opacity-80 cursor-pointer"
            href={fixedSentence.pagelink(Data.forUrlNumber)}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <Image
              src={`/package_images/${Data.imgName}`}
              alt={Data.title}
              width={828}
              height={466}
              objectFit="contain"
            />
          </a>
        </div>
        {appealFlag > 4.0 && (
          <a
            className="inline-block max-w-xl bg-gray-100 text-lg px-6 py-8 shadow mb-8 hover:bg-gray-200 transition"
            href={fixedSentence.pagelink(Data.forUrlNumber)}
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            <div>
              <p>高評価作品ですが、見るか見ないかは自由です。</p>
            </div>
          </a>
        )}
        <div className="flex items-center w-full sm:px-4 pb-4 sm:pb-2">
          <div className="flex space-x-4">
            <Link href="/">
              <a className="underline">ホーム</a>
            </Link>
          </div>
          <div className="px-1">{`>`}</div>
          <div className="flex space-x-4">
            <Link href="/posts">
              <a className="underline">国内ドラマ一覧</a>
            </Link>
          </div>
        </div>
        <div className="sm:flex sm:flex-1">
          <div className="sm:p-4 sm:w-1/2">
            <h2 className="text-xl">作品内容</h2>
            <p className="py-6 leading-relaxed">{Data.desc}</p>
          </div>
          <div className="sm:p-4 sm:w-1/2">
            <h2 className="text-xl">U-NEXTの配信データ</h2>
            <div className="grid grid-cols-2 gap-y-2 py-4">
              <div className="py-2 border-b border-gray-300">
                <span>評価</span>
              </div>
              <div className="py-2 border-b border-gray-300">
                <ReviewStar star={Data.aveReviewPoint} />
              </div>
              <div className="py-2 border-b border-gray-300">
                <span>視聴方法</span>
              </div>
              <div className="py-2 border-b border-gray-300">
                <span className="pr-1">{Data.ondemand}</span>
                {Data.paid != "----" && (
                  <span className="pr-1">{`： ${Data.paid}`}</span>
                )}
              </div>
              <div className="py-2 border-b border-gray-300">
                <span>出演俳優・女優</span>
              </div>
              <div className="py-2 border-b border-gray-300">
                {Data.actor && Data.actor != "----"
                  ? Data.actor.map((data: string) => (
                      <span className="pr-1" key={data}>
                        <Link
                          href={`/actor/${decodeURI(
                            data
                              .substr(0, 10)
                              .replace(
                                /○|〇|●|×|★|＆|◆|【|】|♀|「|」|！|（|）|・|〜|『|』|-| |。|ー|’|、|…|％|～|？|☆|‘|ュ|I.B.|&|<|>/g,
                                ""
                              )
                          )}`}
                          passHref
                        >
                          <a className="text-blue-500 hover:opacity-90 border-b border-blue-500">
                            {data}
                          </a>
                        </Link>
                      </span>
                    ))
                  : Data.actor.map((data: string) => (
                      <span className="pr-1" key={data}>
                        {data}
                      </span>
                    ))}
              </div>
              <div className="py-2 border-b border-gray-300">
                <span>監督</span>
              </div>
              <div className="py-2 border-b border-gray-300">
                {Data.director && Data.director != "----"
                  ? Data.director.map((data: string) => (
                      <span className="pr-1" key={data}>
                        <Link
                          href={`/director/${decodeURI(
                            data
                              .substr(0, 10)
                              .replace(
                                /○|〇|●|×|★|＆|◆|【|】|♀|「|」|！|（|）|・|〜|『|』|-| |。|ー|’|、|…|％|～|？|☆|‘|ュ|I.B.|&|<|>/g,
                                ""
                              )
                          )}`}
                          passHref
                        >
                          <a className="text-blue-500 hover:opacity-90 border-b border-blue-500">
                            {data}
                          </a>
                        </Link>
                      </span>
                    ))
                  : Data.director.map((data: string) => (
                      <span className="pr-1" key={data}>
                        {data}
                      </span>
                    ))}
              </div>
              <div className="py-2 border-b border-gray-300">
                <span>音楽</span>
              </div>
              <div className="py-2 border-b border-gray-300">
                {Data.music && Data.music != "----"
                  ? Data.music.map((data: string) => (
                      <span className="pr-1" key={data}>
                        <Link
                          href={`/music/${decodeURI(
                            data
                              .substr(0, 10)
                              .replace(
                                /○|〇|●|×|★|＆|◆|【|】|♀|「|」|！|（|）|・|〜|『|』|-| |。|ー|’|、|…|％|～|？|☆|‘|ュ|I.B.|&|<|>/g,
                                ""
                              )
                          )}`}
                          passHref
                        >
                          <a className="text-blue-500 hover:opacity-90 border-b border-blue-500">
                            {data}
                          </a>
                        </Link>
                      </span>
                    ))
                  : Data.music.map((data: string) => (
                      <span className="pr-1" key={data}>
                        {data}
                      </span>
                    ))}
              </div>
              <div className="py-2 border-b border-gray-300">
                <span>原作</span>
              </div>
              <div className="py-2 border-b border-gray-300">
                {Data.originalWork && Data.originalWork != "----"
                  ? Data.originalWork.map((data: string) => (
                      <span className="pr-1" key={data}>
                        <Link
                          href={`/originalwork/${decodeURI(
                            data
                              .substr(0, 10)
                              .replace(
                                /○|〇|●|×|★|＆|◆|【|】|♀|「|」|！|（|）|・|〜|『|』|-| |。|ー|’|、|…|％|～|？|☆|‘|ュ|I.B.|&|<|>/g,
                                ""
                              )
                          )}`}
                          passHref
                        >
                          <a className="text-blue-500 hover:opacity-90 border-b border-blue-500">
                            {data}
                          </a>
                        </Link>
                      </span>
                    ))
                  : Data.originalWork.map((data: string) => (
                      <span className="pr-1" key={data}>
                        {data}
                      </span>
                    ))}
              </div>
              <div className="py-2 border-b border-gray-300">
                <span>脚本</span>
              </div>
              <div className="py-2 border-b border-gray-300">
                {Data.scriptWriter && Data.scriptWriter != "----"
                  ? Data.scriptWriter.map((data: string) => (
                      <span className="pr-1" key={data}>
                        <Link
                          href={`/scriptwriter/${decodeURI(
                            data
                              .substr(0, 10)
                              .replace(
                                /○|〇|●|×|★|＆|◆|【|】|♀|「|」|！|（|）|・|〜|『|』|-| |。|ー|’|、|…|％|～|？|☆|‘|ュ|I.B.|&|<|>/g,
                                ""
                              )
                          )}`}
                          passHref
                        >
                          <a className="text-blue-500 hover:opacity-90 border-b border-blue-500">
                            {data}
                          </a>
                        </Link>
                      </span>
                    ))
                  : Data.scriptWriter.map((data: string) => (
                      <span className="pr-1" key={data}>
                        {data}
                      </span>
                    ))}
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 sm:px-4">
          <p>{fixedSentence.caution}</p>
        </div>
        <div className="flex flex-col justify-center items-center py-4 cursor-pointer">
          <span className="py-1 text-sm">{fixedSentence.microCopy}</span>
          <a
            className="py-3 px-8 text-xl text-white bg-blue-400 hover:opacity-90 rounded transition"
            href={fixedSentence.pagelink(Data.forUrlNumber)}
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            U-NEXTでもっと見る
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Post;

export async function getServerSidePaths() {
  const paths = Datas.map((Data) => {
    return {
      params: {
        id: String(Data.forUrlNumber),
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
  const Data = Datas.find(function (Data) {
    return Data.forUrlNumber === params.id;
  });

  return {
    props: {
      Data,
      Datas,
    },
  };
}
