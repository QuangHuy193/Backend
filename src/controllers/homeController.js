const getHomepage = (req, res) => {
  res.send("Hello Huy!");
};

const getRoute2 = (req, res) => {
  res.render("sample.ejs");
};

const getRoute3 = (req, res) => {
  res.send("TỚ NHỚ CẬU");
};

module.exports = {
  getHomepage,
  getRoute2,
  getRoute3,
};
