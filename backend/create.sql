
CREATE TABLE campaign(
  campaign_id SERIAL PRIMARY KEY,
  campaign_title VARCHAR(255),
  status VARCHAR(255),
  creation_date TIMESTAMP,
  creation_user VARCHAR(255)
);

INSERT INTO campaign (campaign_title, status, creation_date, creation_user) VALUES
  ('Mustertitel', 'geplant', '2020-04-07T14:00:00', 'Max Mustermann'),
  ('Mustertitel', 'laufend', '2020-04-07T14:00:00', 'Max Mustermann'),
  ('Mustertitel', 'laufend', '2020-04-07T14:00:00', 'Max Mustermann'),
  ('Mustertitel', 'laufend', '2020-04-07T14:00:00', 'Max Mustermann'),
  ('Mustertitel', 'laufend', '2020-04-07T14:00:00', 'Max Mustermann'),
  ('Mustertitel', 'in Bearbeitung', '2020-04-07T14:00:00', 'Max Mustermann'),
  ('Mustertitel', 'laufend', '2020-04-07T14:00:00', 'Max Mustermann'),
  ('Mustertitel', 'laufend', '2020-04-07T14:00:00', 'Max Mustermann'),
  ('Mustertitel', 'in Bearbeitung', '2020-04-07T14:00:00', 'Max Mustermann'),
  ('Mustertitel', 'abgelaufen', '2020-04-07T14:00:00', 'Max Mustermann'),
   ('Mustertitel', 'in Bearbeitung', '2020-04-07T14:00:00', 'Max Mustermann'),
  ('Mustertitel', 'laufend', '2020-04-07T14:00:00', 'Max Mustermann'),
  ('Mustertitel', 'laufend', '2020-04-07T14:00:00', 'Max Mustermann'),
  ('Mustertitel', 'in Bearbeitung', '2020-04-07T14:00:00', 'Max Mustermann'),
  ('Mustertitel', 'abgelaufen', '2020-04-07T14:00:00', 'Max Mustermann'),
   ('Mustertitel', 'in Bearbeitung', '2020-04-07T14:00:00', 'Max Mustermann'),
  ('Mustertitel', 'laufend', '2020-04-07T14:00:00', 'Max Mustermann'),
  ('Mustertitel', 'laufend', '2020-04-07T14:00:00', 'Max Mustermann'),
  ('Mustertitel', 'in Bearbeitung', '2020-04-07T14:00:00', 'Max Mustermann'),
  ('Mustertitel', 'abgelaufen', '2020-04-07T14:00:00', 'Max Mustermann'),
  ('Mustertitel', 'abgelaufen', '2020-04-07T14:00:00', 'Max Mustermann');