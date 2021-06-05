class Hobby < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  validates :instruction, presence: true
end
