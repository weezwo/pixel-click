class Sketch < ActiveRecord::Base
  serialize :data, JSON

  def self.most_recent(number)
    order(created_at: :desc).limit(number)
  end
end
