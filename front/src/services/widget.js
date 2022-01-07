let widgets = [];

function create(widget) {
  widgets = [widget, ...widgets];
  console.log("widgets", widgets);
}

function read() {
  return widgets;
}

export default {
  create,
  read,
};
