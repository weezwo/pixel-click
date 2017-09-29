class SketchController < ApplicationController
  def index
    @sketches = Sketch.all
    render json: @sketches
  end

  def show
    @sketch = Sketch.find(params[:id])
    render json: @sketch
  end

  def create
    @sketch = Sketch.create(sketch_params)
    render json: @sketch, status: 201
  end

  private
  def sketch_params
    params.permit(data: [])
  end
end
