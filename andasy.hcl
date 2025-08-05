# andasy.hcl app configuration file generated for restaurant on Tuesday, 05-Aug-25 19:49:55 SAST
#
# See https://github.com/quarksgroup/andasy-cli for information about how to use this file.

app_name = "restaurant"

app {

  env = {}

  port = 3000

  compute {
    cpu      = 1
    memory   = 256
    cpu_kind = "shared"
  }

  process {
    name = "restaurant"
  }

}
