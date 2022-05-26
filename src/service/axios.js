import axios from "axios";

const requestData = async ({ url, method, data }) => {
  // 실행이 되면서 data까지 리턴하는 함수
  try {
    const response = await axios[method](url, data);
    const { data } = response;
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export default requestData;
