import { isFirstElementValid } from './helpers';

export const isValidFooterResponse = (response) => {

  if (response?.data) {
    const { data } = response;
    const { title, body = [] } = data;
    const isTitleValid = isFirstElementValid(title);
    const isBodyValid = body && body.every(isBodyElementValid);

    return isTitleValid && isBodyValid;
  }

  return false;
};

const isBodyElementValid = (bodyElement) => {
  const {
    slice_type,
    slice_label,
    items = [],
    primary: { title },
  } = bodyElement;
  const isPrimaryValid = isFirstElementValid(title);
  const areItemsValid = items.every(isItemValid);

  return !!slice_type && isPrimaryValid && areItemsValid;
};

const isItemValid = (item) => {
  const { link_name, link_href } = item;

  return isFirstElementValid(link_name) && isFirstElementValid(link_href);
};
