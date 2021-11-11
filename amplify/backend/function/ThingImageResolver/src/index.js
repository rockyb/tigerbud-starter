exports.handler = async (event) => {
  return `https://picsum.photos/1068/500?${event.source.id}`;
};
