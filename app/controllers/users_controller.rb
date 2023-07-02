require 'debug'
class UsersController < ApplicationController
  def index
    
  end
  def homepage
    referrals = Referral.where(user_id: params[:user_id])

    render json: referrals
  end

  def refer_email
    
  end
end
