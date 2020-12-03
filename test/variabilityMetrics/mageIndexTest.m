% Test units of the mageIndex function
%
% ---------------------------------------------------------------------
%
% Copyright (C) 2020 Giacomo Cappon
%
% This file is part of AGATA.
%
% ---------------------------------------------------------------------

addpath(fullfile('..','..','src','variabilityMetrics'));

time = datetime(2000,1,1,0,10,0):minutes(5):datetime(2000,1,1,0,0,0)+minutes(4000); % length = 11;
rng(1)
data = timetable(randn(length(time),1)*70+140,'VariableNames', {'glucose'}, 'RowTimes', time);
data.glucose(11:100) = nan;

%% Test 1: check NaN presence
results = mageIndex(data);
assert(~isnan(results));

%% Test 2: check results calculation
results = mageIndex(data);
assert(round(results*10000)/10000 == 0.24630);