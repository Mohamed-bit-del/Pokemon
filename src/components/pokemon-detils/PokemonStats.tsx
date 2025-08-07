import React from 'react';
import Icon from '../AppIcon';

type PokemonStatsProps = {
  height: number;
  weight: number;
  id: number;
};

const PokemonStats = ({ height, weight, id }: PokemonStatsProps) => {
  const formatHeight = (heightInDecimeters: number) => {
    const meters = (heightInDecimeters / 10)?.toFixed(1);
    const feet = ((heightInDecimeters * 3.937) / 12)?.toFixed(1);
    return {
      metric: `${meters} m`,
      imperial: `${feet} ft`
    };
  };

  const formatWeight = (weightInHectograms: number) => {
    const kg = (weightInHectograms / 10)?.toFixed(1);
    const lbs = (weightInHectograms * 0.220462)?.toFixed(1);
    return {
      metric: `${kg} kg`,
      imperial: `${lbs} lbs`
    };
  };

  const heightData = formatHeight(height);
  const weightData = formatWeight(weight);

  const stats = [
    {
      label: 'Height',
      value: heightData?.metric,
      subtitle: heightData?.imperial,
      icon: 'Ruler',
      color: 'text-blue-600'
    },
    {
      label: 'Weight',
      value: weightData?.metric,
      subtitle: weightData?.imperial,
      icon: 'Scale',
      color: 'text-green-600'
    },
    {
      label: 'ID',
      value: `#${String(id)?.padStart(3, '0')}`,
      subtitle: 'Pokédex Number',
      icon: 'Hash',
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="bg-card p-6">
      <h2 className="text-lg font-semibold text-foreground mb-4 text-center">
        Stats
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats?.map((stat, index) => (
          <div
            key={index}
            className="bg-muted rounded-xl p-4 text-center transition-transform duration-200 hover:scale-105"
          >
            <div className="flex justify-center mb-2">
              <div className={`${stat?.color} bg-white rounded-full p-2 shadow-sm`}>
                <Icon
                  name={stat?.icon}
                  size={20}
                />
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-xs text-text-secondary font-medium uppercase tracking-wide">
                {stat?.label}
              </p>
              <p className="text-lg font-bold text-foreground">
                {stat?.value}
              </p>
              <p className="text-xs text-text-secondary">
                {stat?.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonStats;