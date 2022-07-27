function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ozxktOUPwC":
        Script1();
        break;
      case "6f0LZizNGjw":
        Script2();
        break;
      case "5onaZZUjxRB":
        Script3();
        break;
      case "6jrXJBnRZ6T":
        Script4();
        break;
      case "6N6lgFSgG3q":
        Script5();
        break;
      case "6cMHNFATrTP":
        Script6();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  $("#tab-customlink").hide();
}

function Script3()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script4()
{
  $("#tab-customlink").show();
}

function Script5()
{
  $("#tab-customlink").show();
}

function Script6()
{
  window.print();
}

