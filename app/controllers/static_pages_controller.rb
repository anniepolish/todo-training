class StaticPagesController < ApplicationController
  def home
    @task = current_user.tasks.build if logged_in?
    @list_items = current_user.list.paginate(page: params[:page]) if logged_in?
  end

  def help
  end

  def about
  end
end
