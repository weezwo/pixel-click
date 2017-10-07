class SketchesController < ApplicationController
  def index
    @sketches = Sketch.all.order('id DESC').paginate(:page => params[:page], :per_page => 5)
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
