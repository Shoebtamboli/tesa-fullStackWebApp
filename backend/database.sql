CREATE DATABASE campaign;

CREATE TABLE campaign(
  campaign_id SERIAL PRIMARY KEY,
  campaign_title VARCHAR(255),
  status VARCHAR(255),
  creation_date TIMESTAMP,
  creation_user VARCHAR(255)
);