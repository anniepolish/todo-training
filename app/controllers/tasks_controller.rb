class TasksController < ApplicationController
  before_action :logged_in_user, only: [:create, :destroy]
  before_action :correct_user,   only: :complete

  def create
    @task = current_user.tasks.build(task_params)
    @task.completed = false
    if @task.save
      redirect_to root_url
    else
      render 'static_pages/home'
    end
  end

  def update
    @task = current_user.tasks.find_by(id: params[:id])
    @task.update_attributes(task_params)
  end

  def complete
    @task = current_user.tasks.find_by(id: params[:id])
    @task.completed = true
    if @task.save
      #redirect_to root_url
      respond_to do |f|
        f.html { redirect_to @task }
        f.js
      end
    end
  end

  def destroy
  end

  private

    def task_params
      params.require(:task).permit(:content, :completed)
    end

    def correct_user
      @task = current_user.tasks.find_by(id: params[:id])
      redirect_to root_url if @task.nil?
    end
end
