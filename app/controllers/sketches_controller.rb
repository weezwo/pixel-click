class SketchesController < ApplicationController
  def index
    @sketches = Sketch.most_recent(20)
    render json: @sketches
  end

  def show
    @sketch = [Sketch.find(params[:id])]
    render json: @sketch
  end

  def create
    @sketch = Sketch.new
    @sketch.data = params[:data]
    @sketch.save
    render json: @sketch, status: 201
  end
end
