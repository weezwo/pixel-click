class SketchesController < ApplicationController
  def index
    @sketches = Sketch.all
    render json: @sketches
  end

  def show
    @sketch = Sketch.find(params[:id])
    render json: @sketch
  end

  def create
    @sketch = Sketch.new
    @sketch.data = params[:data]
    @sketch.save
    render json: @sketch, status: 201
  end
end
