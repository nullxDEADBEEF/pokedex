FROM php:latest

WORKDIR /var/www/html

RUN apt-get update && apt-get install -y \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    git \
    curl

RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath opcache

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

COPY composer.json ./
COPY composer.lock ./

RUN composer install --no-scripts --no-autoloader

COPY ./ ./

RUN composer dump-autoload --optimize

RUN chown -R www-data:www-data /var/www/html/storage

EXPOSE 8000

CMD php artisan serve --host=0.0.0.0 --port=8000