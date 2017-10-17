class AddLikesToSketches < ActiveRecord::Migration
  def change
    add_column :sketches, :likes, :integer, default: 0
  end
end
