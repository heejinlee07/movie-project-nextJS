const Truncate = (clamp) => {
  return `
 overflow: hidden;
 text-overflow: ellipsis;
 display: -webkit-box;
 -webkit-box-orient: vertical;
 -webkit-line-clamp: ${clamp};
 `;
};

export default Truncate;
