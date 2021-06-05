class CreateHobbies < ActiveRecord::Migration[6.0]
  def change
    create_table :hobbies do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.text :instruction, null: false
      t.string :image, default: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvYmJpZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'

      t.timestamps
    end
  end
end
