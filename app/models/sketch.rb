class Sketch < ActiveRecord::Base
  serialize :data, JSON
end
