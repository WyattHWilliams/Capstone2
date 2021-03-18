\echo 'Delete and recreate disciple db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE disciple;
CREATE DATABASE disciple;
\connect disciple

\i disciple-schema.sql
\i disciple-seed.sql

\echo 'Delete and recreate disciple_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE disciple_test;
CREATE DATABASE disciple_test;
\connect disciple_test

\i disciple-schema.sql