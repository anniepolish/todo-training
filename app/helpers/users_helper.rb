module UsersHelper
  def picture_for(user)
    if got_pic = Pic.find_by(user_id:user.id)
      url = got_pic.url
    else
      url = "http://secure.gravatar.com/avatar/#1" #default pic
    end
    image_tag(url, alt:"profile pic", class:"gravatar", height:100)
  end

#  def url_for(user)
#    if got_pic = Pic.find_by(user_id:user.id)
#      return got_pic.url
#    else
#      return "https://secure.gravatar.com/avatar/#1"
#    end
#  end
end
