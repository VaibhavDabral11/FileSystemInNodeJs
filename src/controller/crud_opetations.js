import { promises as fs } from "fs";
const FILE_PATH = "../../test.txt";

export const testApi = async (req, res) => {
  try {
    console.log("welcome to file System");
    res.send({
      message: "Welcome to file system",
    });
  } catch (error) {
    console.log(error);
    res.send({
      message: `${error}`,
    });
  }
};

export const createFile = async (req, res) => {
  try {
    const { content } = req.body;
    console.log("----content-----------", content);
    await fs.writeFile(FILE_PATH, content, "utf8");
    res.json({
      status: 201,
      message: "File created successfully",
    });
  } catch (error) {
    console.log("---------------error---------------", error);
    res.json({
      status: 201,
      message: `${error}`,
    });
  }
};
export const readFile = async (req, res) => {
  try {
    const data = await fs.readFile(FILE_PATH, "utf8");
    console.log("--------data------", data);
    res.json({
      status: 201,
      message: "File created successfully",
      data: data,
    });
  } catch (error) {
    console.log("---------------error---------------", error);
    res.json({
      status: 201,
      message: `${error}`,
    });
  }
};
export const updateFile = async (req, res) => {
  try {
    const { content } = req.body;
    console.log("----content-----------", content);
    await fs.writeFile(FILE_PATH, content, "utf8");
    res.json({
      status: 201,
      message: "File created successfully",
    });
  } catch (error) {
    console.log("---------------error---------------", error);
    res.json({
      status: 201,
      message: `${error}`,
    });
  }
};
export const deleteFile = async (req, res) => {
  try {
    const { content } = req.body;
    console.log("----content-----------", content);
    await fs.writeFile(FILE_PATH, content, "utf8");
    res.json({
      status: 201,
      message: "File created successfully",
    });
  } catch (error) {
    console.log("---------------error---------------", error);
    res.json({
      status: 201,
      message: `${error}`,
    });
  }
};
