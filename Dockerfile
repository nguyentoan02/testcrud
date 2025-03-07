# Sử dụng image Node.js chính thức
FROM node:18

# Thiết lập thư mục làm việc
WORKDIR /app

# Copy package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ source code vào container
COPY . .

# Expose cổng ứng dụng
EXPOSE 3000

# Lệnh chạy ứng dụng
CMD ["node", "app.js"]
