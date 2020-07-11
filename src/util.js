module.exports = {
    title: (str) =>
    {
      return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    },
    titleFirstOnly: (str) =>
    {
      return str[0].toUpperCase() + str.slice(1, str.length);
    }
};