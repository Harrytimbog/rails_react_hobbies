class Api::V1::HobbiesController < ApplicationController
  def index
    hobby = Hobby.all.order(created_at: :desc)
    render json: hobby
  end

  def create
    hobby = Hobby.create!(hobby_params)
    if hobby
      render json: hobby
    else
      render json: hobby.errors
    end
  end

  def show
    if hobby
      render json: hobby
    else
      render json: hobby.errors
    end
  end

  def destroy
    hobby&.destroy
    render json: { message: 'Hobby deleted!' }
  end

  private

  def hobby_params
    params.permit(:name, :image, :description, :instruction)
  end

  def hobby
    @hobby ||= Hobby.find(params[:id])
  end
end
