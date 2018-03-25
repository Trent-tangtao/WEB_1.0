document.write(document.lastModified);
now=new Date();
localtime=now.toString();
utctime=now.toUTCString();
document.write("<p><strong>local time  :</strong>"+localtime+"</p>");
document.write("<p><strong>utc time  :</strong>"+utctime+"</p>");