class ApplicationController < ActionController::Base
  before_action :set_locale
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!

  rescue_from CanCan::AccessDenied do |exception|
  redirect_to root_path
  end

  def set_locale
    I18n.locale = 'es'
  end
end
