import pg from 'pg';

const client = new pg.Client({
  host: "dpg-cm7f5den7f5s73db71hg-a.singapore-postgres.render.com",
  user: "admin",
  port: 5432,
  password: "WmAZ3W3fYG5GdTjvyb0Q3TpmVyUVkM86",
  database: "sampledbtest",
  ssl: true
})

export default client;