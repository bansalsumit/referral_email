class AddUserRefToReferrals < ActiveRecord::Migration[7.0]
  def change
    add_reference :referrals, :user, null: false, foreign_key: true
  end
end
