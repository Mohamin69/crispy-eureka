FROM php:8.1-apache

# Install common PHP extensions (if needed)
RUN apt-get update && apt-get install -y --no-install-recommends \
    libzip-dev zip unzip git && \
    docker-php-ext-install pdo pdo_mysql && \
    rm -rf /var/lib/apt/lists/*

# Copy site files
COPY . /var/www/html/

# Ensure permissions
RUN chown -R www-data:www-data /var/www/html && chmod -R 755 /var/www/html

# Enable rewrite (if you later need it)
RUN a2enmod rewrite

EXPOSE 80

CMD ["apache2-foreground"]
