class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.all
    render "api/channels/index"
  end

  def show
    @channel = Channel.find(params[:id])
    if @channel
      render "api/channels/show"
    else
      render json: ["Channel not found or you do not have access"], status: 401
    end
  end

  def create
    @channel = Channel.new(channel_params)

    if @channel.save
      Subscription.create(channel_id: @channel.id, user_id: @channel.creator_id)
      render "api/channels/show"
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def update

  end

  def destroy

  end

  private

  def channel_params
    params.require(:channel).permit(:title, :description, :private, :is_direct, :creator_id)
  end
end
