const Truncate = (width) => {
  return `
 width: ${width};
 overflow: scroll;
 text-overflow: ellipsis;
 `;
};

export default Truncate;
