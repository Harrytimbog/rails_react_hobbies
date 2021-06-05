# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_06_03_203912) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "hobbies", force: :cascade do |t|
    t.string "name", null: false
    t.text "description", null: false
    t.text "instruction", null: false
    t.string "image", default: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvYmJpZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
