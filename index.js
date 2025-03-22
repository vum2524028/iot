const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Cho phép dùng file tĩnh (CDN ngoại không cần nhưng để sẵn)
app.use(express.static('public'));

app.get('/', (req, res) => {
  const html = `
  <!DOCTYPE html>
  <html lang="vi">
  <head>
    <meta charset="UTF-8">
    <title>Danh sách học viên</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  </head>
  <body class="p-4">
    <div class="container">
      <h2 class="mb-4 text-primary">Danh sách học viên</h2>
      <table class="table table-bordered table-striped table-hover">
        <thead class="table-dark">
          <tr>
            <th>MSHV</th>
            <th>Họ tên</th>
            <th>Ngày sinh</th>
            <th>Quê quán</th>
            <th>Email</th>
            <th>SĐT</th>
          </tr>
        </thead>
        <tbody>
         
          <tr>
            <td>M2524028</td>
            <td>Nguyễn Văn Vũ</td>
            <td>10/02/2001</td>
            <td>Đồng tháp/td>
            <td>vum2524028@gstudent.ctu.edu.vn</td>
            <td>0987654321</td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
  </html>
  `;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server chạy tại http://localhost:${PORT}`);
});
