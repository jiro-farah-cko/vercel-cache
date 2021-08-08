import data from "../../data";

export const getBannerCovidAPI = () => {
  return data.dataBannerCovid;
};

export const getHomepageAPI = () => {
  return data.homepageData;
};

export const getFooterAPI = () => {
  return data.footerData;
};

export const getMenuAPI = (time) => {
  const targetMinTime = "2021-08-08T10:05:33.739Z";
  const targetMaxTime = "2021-08-08T10:10:33.739Z";
  if (time < targetMinTime || time > targetMaxTime) {
    return data.menuData;
  }
  return null;
};
