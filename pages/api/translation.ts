import type { NextApiRequest, NextApiResponse } from "next";
import fsPromises from "fs/promises";
import path from "path";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.method === "GET") {
    const { ns } = req.query;
    const languages = (req.query.languages || "").toString().split(",");

    const readFiles = languages.map((language) => {
      const dataFilePath = path.join(process.cwd(), `/public/locales/${language}/${ns}.json`);
      return fsPromises.readFile(dataFilePath);
    });

    const jsonDataList = await Promise.all(readFiles);
    const objectData = jsonDataList.reduce((acc, jsonData, index) => {
      return {
        ...acc,
        [languages[index]]: JSON.parse(jsonData.toString()),
      };
    }, {});
    res.status(200).json(objectData);
  }
}
