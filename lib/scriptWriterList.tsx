import { Datas } from "./Datas";

//脚本の抽出
let tmpList = [];
for (let i = 0; i < Datas.length; i += 1) {
  for (let j = 0; j < Datas[i].scriptWriter.length; j = j + 1) {
    tmpList.push(Datas[i].scriptWriter[j]);
  }
}

const set = new Set(tmpList); //重複の削除（setオブジェクト化）
const arrayList = Array.from(set); //setオブジェクトを配列化

//Nodataの削除
let arrayName = arrayList.filter((item) => {
  return item != "----";
});

// pageUrlオブジェクトを追加
const newResult = arrayName.map((name) => {
  return {
    scriptWriterName: name,
    pageUrl: decodeURI(
      name
        .substr(0, 10)
        .replace(
          /○|〇|●|×|★|＆|◆|【|】|♀|「|」|！|（|）|・|〜|『|』|-| |。|ー|’|、|…|％|～|？|☆|‘|ュ|I.B.|&|<|>/g,
          ""
        )
    ),
  };
});

export const scriptWriterList = newResult;
