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
  const targetMinTime = "2021-08-05T13:30:45.432Z";
  const targetMaxTime = "2021-08-05T13:33:45.432Z";
  if (time < targetMinTime || time > targetMaxTime) {
    return data.menuData;
  }
  return null;
};
